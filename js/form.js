const form = document.getElementById('request-form');
const successBox = document.getElementById('success-box');
const submitBtn = document.getElementById('submit-btn');
const sendError = document.getElementById('send-error');
// كل دالة ترجع مفتاح الخطأ، أو نصاً فارغاً إن كانت القيمة صحيحة
const rules = {
  name: v => v.trim().length >= 3 ? '' : 'err.name',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? '' : 'err.email',
  phone: v => /^\+?[0-9]{9,15}$/.test(v.replace(/\s/g, '')) ? '' : 'err.phone',
  service: v => v ? '' : 'err.service',
  details: v => v.trim().length >= 20 ? '' : 'err.details',
};

function validateField(field) {
  const key = rules[field.name](field.value);
  const errorEl = document.getElementById('error-' + field.name);

  if (key) {
    errorEl.dataset.i18n = key;
    errorEl.textContent = t(key);
  } else {
   delete errorEl.dataset.i18n;
    errorEl.textContent = '';
  }

  errorEl.classList.toggle('hidden', key === '');
  field.classList.toggle('border-red-500', key !== '');
  field.classList.toggle('border-slate-300', key === '');

  return key === '';
}

// التحقق عند مغادرة الحقل
Object.keys(rules).forEach(name => {
  form.elements[name].addEventListener('blur', e => validateField(e.target));
});

// عند الإرسال
form.addEventListener('submit', async e => {
  e.preventDefault();

  let allValid = true;
  let firstInvalid = null;

  Object.keys(rules).forEach(name => {
    const field = form.elements[name];
    if (!validateField(field)) {
      allValid = false;
      if (!firstInvalid) firstInvalid = field;
    }
  });

  if (!allValid) {
    firstInvalid.focus();
    return;
  }

  // تجهيز البيانات
  const data = Object.fromEntries(new FormData(form));
  data.access_key = '7e95c345-c6aa-47f2-9a7d-b3224f8891d9';
  data.subject = 'طلب خدمة جديد من موقع نخبة التقنية';
  data.from_name = 'Nokhba Tech Website';

  // حالة الانتظار
  submitBtn.disabled = true;
  submitBtn.textContent = t('form.sending');
  sendError.classList.add('hidden');

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      form.reset();
      form.classList.add('hidden');
      successBox.classList.remove('hidden');
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('خطأ في الإرسال:', error);
    sendError.classList.remove('hidden');
    submitBtn.disabled = false;
    submitBtn.textContent = t('form.submit');
  }
});
