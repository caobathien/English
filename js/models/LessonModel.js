/**
 * ============================================
 * LessonModel - Lesson data access layer
 * ============================================
 */
class LessonModel {
  constructor() {
    this.lessons = window.LessonData || [];
  }

  /** Get all available lessons */
  getAll() {
    return this.lessons;
  }

  /** Get a lesson by ID */
  getById(id) {
    return this.lessons.find(l => l.id === id) || null;
  }

  /** Get total number of lessons */
  getTotal() {
    return this.lessons.length;
  }

  /** Check if a lesson exists */
  exists(id) {
    return this.lessons.some(l => l.id === id);
  }

  /** Get all section names */
  getSectionNames() {
    return ['grammar', 'vocabulary', 'listening', 'writing', 'quiz'];
  }

  /** Get section labels (Vietnamese) */
  getSectionLabels() {
    return {
      grammar: { icon: '📖', label: 'Ngữ pháp' },
      vocabulary: { icon: '📝', label: 'Từ vựng' },
      listening: { icon: '🎧', label: 'Nghe & Nói' },
      writing: { icon: '✍️', label: 'Viết' },
      quiz: { icon: '✅', label: 'Trắc nghiệm' }
    };
  }
}

window.LessonModel = LessonModel;
