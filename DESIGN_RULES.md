# Portfolio Design Rules — Abu Md. Selim

> **এই ডকটি যেকোনো এজেন্ট বা ডেভেলপারকে অবশ্যই পড়তে হবে সাইটে কোনো পরিবর্তন করার আগে।**

---

## নিয়ম ০১ — Hero Section: Desktop-এ Full Image

### কী হবে
Desktop-এ hero section-এর profile photo সবসময় **full image** হিসেবে দেখাতে হবে — অর্থাৎ ছবির কোনো অংশ crop বা hide হবে না।

### সঠিক CSS
```css
/* Desktop: show full image (object-fit: contain) */
.profile-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center top;
}

/* Mobile only: cover to fill viewport */
@media (max-width: 768px) {
    .profile-img {
        object-fit: cover;
        object-position: center top;
    }
}
```

### ⚠️ যা করা যাবে না
- Desktop-এ `object-fit: cover` দেওয়া যাবে না
- `.profile-img` থেকে `contain` সরানো যাবে না
- Image-কে crop করে বা `overflow: hidden` দিয়ে ছেঁটে দেওয়া যাবে না

---

## নিয়ম ০২ — Header: Scroll করার পর দেখাবে

### কী হবে
- পেজ লোড হলে header **দেখা যাবে না** (অদৃশ্য থাকবে)
- Hero section-এর ৬০% scroll করার পর header **fade in** হয়ে appear করবে
- একবার দেখা দিলে যেকোনো পেজে **fixed/sticky** থাকবে

### সঠিক CSS
```css
/* Default: hidden */
.top-sticky-header {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.4s ease, transform 0.4s ease, background 0.35s ease, padding 0.35s ease;
}

/* After scroll: visible */
.top-sticky-header.scrolled {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
    background: rgba(8,8,8,0.92);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--border);
}
```

### সঠিক JavaScript
```javascript
const header = document.getElementById('header');
function updateHeader() {
    const heroHeight = document.getElementById('home').offsetHeight;
    header.classList.toggle('scrolled', window.scrollY > heroHeight * 0.6);
}
window.addEventListener('scroll', updateHeader);
updateHeader();
```

### ⚠️ যা করা যাবে না
- পেজ লোডেই header দৃশ্যমান করা যাবে না
- `opacity: 0` বা `pointer-events: none` সরানো যাবে না
- Header কে `position: static` বা `position: absolute` দেওয়া যাবে না
- Hero-তে থাকতেই `.scrolled` class add করা যাবে না

---

## সারসংক্ষেপ চেকলিস্ট

কোনো পরিবর্তন করার পর নিচের বিষয়গুলো যাচাই করুন:

- [ ] Desktop-এ hero image সম্পূর্ণ দেখা যাচ্ছে (crop নেই)
- [ ] পেজ লোডে header দেখা যাচ্ছে না
- [ ] Hero scroll করার পরে header appear করছে
- [ ] Header appear করার পর fixed থাকছে
- [ ] Mobile-এ image cover হচ্ছে (এটা ঠিক আছে)

---

*Last updated: June 2026 | Repository: abumdselim/abumdselim*
