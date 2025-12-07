const classes = [
    {name: 'Reformer Pilates', seats: 6},
    {name: 'Mat Pilates', seats: 12},
    {name: 'Private Coaching', seats: 3}
  ];

  //Booking buttons
  document.querySelectorAll('.book-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const cls = encodeURIComponent(this.dataset.class || '');
      window.location.href = `contact.html?prefill=${cls}`;
    });
  });
