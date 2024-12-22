    let currentIndex = 0;
    const images = document.querySelectorAll('.image-item');
    const totalImages = images.length;

    function changeImage() {
        // إزالة الفئة "active" من الصورة الحالية
        images[currentIndex].classList.remove('active');
        
        // تحديد الصورة التالية
        currentIndex = (currentIndex + 1) % totalImages;
        
        // إضافة الفئة "active" للصورة التالية
        images[currentIndex].classList.add('active');
    }

    // تغيير الصورة كل 3 ثواني
    setInterval(changeImage, 3000);
