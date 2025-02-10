// Responsive adjustments
function handleResponsive() {
    const screenWidth = window.innerWidth;
    const navigation = document.querySelector('.navigation');
    const main = document.querySelector('.main');
    const cardBox = document.querySelector('.cardBox');
    const chartBox = document.querySelector('.chartBox');
  
    // Mobile view
    if (screenWidth <= 768) {
      navigation.classList.add('active');
      main.classList.add('active');
      
      // Adjust card grid
      cardBox.style.gridTemplateColumns = 'repeat(2, 1fr)';
      chartBox.style.gridTemplateColumns = '1fr';
      
      // Adjust table layouts
      document.querySelectorAll('table').forEach(table => {
        table.style.minWidth = '600px';
      });
    }
  
    // Tablet view
    if (screenWidth > 768 && screenWidth <= 992) {
      cardBox.style.gridTemplateColumns = 'repeat(3, 1fr)';
      chartBox.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
  
    // Desktop view
    if (screenWidth > 992) {
      navigation.classList.remove('active');
      main.classList.remove('active');
      cardBox.style.gridTemplateColumns = 'repeat(4, 1fr)';
      chartBox.style.gridTemplateColumns = 'repeat(2, 1fr)';
    }
  }
  
  // Initial call
  handleResponsive();
  
  // Add resize listener
  window.addEventListener('resize', handleResponsive);
  
  // Toggle menu for mobile
  document.querySelector('.toggle').addEventListener('click', () => {
    const navigation = document.querySelector('.navigation');
    const main = document.querySelector('.main');
    
    if (window.innerWidth <= 768) {
      navigation.classList.toggle('expanded');
      main.classList.toggle('shifted');
    }
  });
  
  // Chart responsiveness
  window.addEventListener('resize', () => {
    if (window.barChart) {
      window.barChart.resize();
      window.polarChart.resize();
    }
  });