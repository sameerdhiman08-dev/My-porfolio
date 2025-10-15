//  // Back to top button
//         const backToTopButton = document.getElementById('backToTop');
        
//         window.addEventListener('scroll', () => {
//             if (window.pageYOffset > 300) {
//                 backToTopButton.classList.add('show');
//             } else {
//                 backToTopButton.classList.remove('show');
//             }
//         });
        
//         backToTopButton.addEventListener('click', () => {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         });
        
//         // Navbar background change on scroll
//         const navbar = document.querySelector('.navbar');
        
//         window.addEventListener('scroll', () => {
//             if (window.pageYOffset > 50) {
//                 navbar.classList.add('shadow');
//             } else {
//                 navbar.classList.remove('shadow');
//             }
//         });
        
//         // Portfolio filtering
//         const filterButtons = document.querySelectorAll('.filter-btn');
//         const projectItems = document.querySelectorAll('.project-card');
        
//         filterButtons.forEach(button => {
//             button.addEventListener('click', () => {
//                 // Remove active class from all buttons
//                 filterButtons.forEach(btn => btn.classList.remove('active'));
                
//                 // Add active class to clicked button
//                 button.classList.add('active');
                
//                 // Get filter value
//                 const filterValue = button.getAttribute('data-filter');
                
//                 // Show/hide projects based on filter
//                 projectItems.forEach(item => {
//                     if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
//                         item.style.display = 'block';
//                     } else {
//                         item.style.display = 'none';
//                     }
//                 });
//             });
//         });