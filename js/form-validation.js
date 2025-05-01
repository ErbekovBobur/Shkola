class FormValidator {
    constructor(formId) {
      this.form = document.getElementById(formId);
      this.init();
    }
  
    init() {
      this.setMinDate();
      this.addValidation();
      this.initPhoneMask();
    }
  
    setMinDate() {
      const dateInput = this.form.querySelector('input[type="date"]');
      if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
      }
    }
  
    initPhoneMask() {
      const phoneInput = this.form.querySelector('input[type="tel"]');
      if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
          const x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/);
          e.target.value = !x[2] ? x[1] : `+${x[1]} (${x[2]}) ${x[3]}-${x[4]}-${x[5]}`;
        });
      }
    }
  
    addValidation() {
      this.form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (this.validateForm()) {
          await this.submitForm();
        }
      });
    }
  
    validateForm() {
      let isValid = true;
      const requiredFields = this.form.querySelectorAll('[required]');
  
      requiredFields.forEach(field => {
        field.classList.remove('error');
        
        if (!field.value.trim()) {
          field.classList.add('error');
          this.showError(field, 'Это поле обязательно');
          isValid = false;
        }
  
        if (field.type === 'email' && !this.validateEmail(field.value)) {
          field.classList.add('error');
          this.showError(field, 'Введите корректный email');
          isValid = false;
        }
      });
  
      return isValid;
    }
  
    validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    }
  
    showError(field, message) {
      let errorElement = field.nextElementSibling;
      
      if (!errorElement || !errorElement.classList.contains('error-message')) {
        errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        field.parentNode.insertBefore(errorElement, field.nextSibling);
      }
      
      errorElement.textContent = message;
    }
  
    async submitForm() {
      const formData = new FormData(this.form);
      const submitBtn = this.form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
  
      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
  
        const response = await fetch(this.form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'X-Requested-With': 'XMLHttpRequest'
          }
        });
  
        const data = await response.json();
  
        if (data.success) {
          this.showSuccessMessage();
          this.form.reset();
        } else {
          this.showServerError(data.message);
        }
      } catch (error) {
        console.error('Ошибка:', error);
        this.showServerError('Ошибка соединения');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  
    showSuccessMessage() {
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span data-translate="form-success">Спасибо! Мы свяжемся с вами в ближайшее время.</span>
      `;
      
      this.form.parentNode.insertBefore(successMsg, this.form.nextSibling);
      
      setTimeout(() => {
        successMsg.classList.add('fade-out');
        setTimeout(() => successMsg.remove(), 500);
      }, 5000);
    }
  
    showServerError(message) {
      alert(`Ошибка: ${message}`);
    }
  }
  
  // Инициализация для всех форм
  document.addEventListener('DOMContentLoaded', () => {
    new FormValidator('schoolTourForm');
    // Добавьте другие формы по необходимости
  });