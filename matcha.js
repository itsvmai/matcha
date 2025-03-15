document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Navigation active state
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
	document.addEventListener("DOMContentLoaded", function () {
    // اختيار الزر الخاص بتحميل المنتجات
    const loadProductsButton = document.getElementById("load-products");

    // التأكد من أن الزر موجود قبل إضافة الحدث
    if (loadProductsButton) {
        loadProductsButton.addEventListener("click", function (event) {
            event.preventDefault(); // منع الانتقال إلى صفحة أخرى

            // جلب محتوى `products.html`
            fetch("products.html")
                .then(response => response.text()) // تحويل الاستجابة إلى نص
                .then(data => {
                    document.getElementById("products-container").innerHTML = data; // إدخال المحتوى داخل `div`
                })
                .catch(error => console.error("Error loading products:", error));
        });
    }
});

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
	
    // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.closest('.product-card');
            const productName = product.querySelector('h3').textContent;
            alert(`${productName} has been added to your cart!`);
        });
    });
    // Simple animation for product cards
    const productCards = document.querySelectorAll('.product-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    productCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
		document.addEventListener("DOMContentLoaded", function () {
    document.querySelector('a[href="products.html"]').addEventListener("click", function (event) {
        event.preventDefault(); // منع الانتقال إلى الصفحة الجديدة

        fetch("products.html")
            .then(response => response.text())
            .then(data => {
                document.getElementById("products-container").innerHTML = data;
            })
            .catch(error => console.error("Error loading products:", error));
    });
});

    });
});