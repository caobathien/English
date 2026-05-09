/**
 * ============================================
 * AppController - Main Application Controller
 * ============================================
 * Coordinates between Models, Views, and Services.
 * Handles routing (home ↔ lesson) and state management.
 */
class AppController {
  constructor() {
    this.container = document.getElementById('app');

    // Services
    this.storage = new StorageService();
    this.audio = new AudioManager();

    // Models
    this.lessonModel = new LessonModel();
    this.progress = new ProgressModel(this.storage);

    // Views
    this.homeView = new HomeView(this.container);
    this.lessonView = new LessonView(this.container);

    // Theme
    this.theme = this.storage.load('theme', 'dark');
  }

  /** Initialize the application */
  init() {
    this._applyTheme();
    this._initSpeechVoices();
    this.showHome();
  }

  /** Show the home page */
  showHome() {
    this.homeView.onDaySelect = (dayId) => this._handleDaySelect(dayId);
    this.homeView.onThemeToggle = () => this._toggleTheme();
    this.homeView.render(this.lessonModel.getAll(), this.progress);
  }

  /** Show a lesson page */
  showLesson(dayId) {
    const lesson = this.lessonModel.getById(dayId);
    if (!lesson) return;
    if (!this.progress.isDayUnlocked(dayId)) return;

    this.lessonView.onBack = () => this.showHome();
    this.lessonView.onSectionComplete = (id, section) => this._handleSectionComplete(id, section);
    this.lessonView.onLessonComplete = (id) => this._handleLessonComplete(id);
    this.lessonView.render(lesson, this.progress, this.audio);
  }

  // ==================== PRIVATE HANDLERS ====================

  _handleDaySelect(dayId) {
    this.audio.playClick();
    this.showLesson(dayId);
  }

  _handleSectionComplete(dayId, sectionName) {
    this.progress.completeSection(dayId, sectionName);
    this.progress.addXP(20); // 20 XP per section
  }

  _handleLessonComplete(dayId) {
    const lesson = this.lessonModel.getById(dayId);
    if (!lesson) return;

    this.progress.completeDay(dayId);
    this.progress.addXP(lesson.xpReward);
    this.audio.playComplete();

    // Check if next day was unlocked
    const nextDay = dayId + 1;
    if (this.progress.isDayUnlocked(nextDay)) {
      this.audio.playUnlock();
    }
  }

  _toggleTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    this.storage.save('theme', this.theme);
    this._applyTheme();
  }

  _applyTheme() {
    document.documentElement.setAttribute('data-theme', this.theme);
  }

  /** Pre-load speech synthesis voices */
  _initSpeechVoices() {
    if ('speechSynthesis' in window) {
      speechSynthesis.getVoices();
      speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
    }
  }
}

window.AppController = AppController;
