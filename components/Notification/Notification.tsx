const Notification = (
  type: 'info' | 'error' | 'warning' | 'success',
  text: string,
): void => {
  let notificationBox = document.querySelector('.notification-box');

  const alerts = {
    info: {
      icon: `<svg class="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
      color: 'text-blue-500',
    },
    error: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
      color: 'text-red-500',
    },
    warning: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>`,
      color: 'text-yellow-500',
    },
    success: {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>`,
      color: 'text-green-500',
    },
  };

  if (notificationBox) {
    console.log('!!!!!!!!! = ', alerts[type].color);
    let component = document.createElement('div');
    component.className = `relative flex items-center ${alerts[type].color} text-sm font-bold px-4 py-3 rounded-md opacity-0 transform transition-all duration-500 mb-1`;
    component.innerHTML = `${alerts[type].icon}<p>${text}</p>`;
    notificationBox.appendChild(component);
    setTimeout(() => {
      component.classList.remove('opacity-0');
      component.classList.add('opacity-1');
    }, 1); //1ms For fixing opacity on new element
    setTimeout(() => {
      component.classList.remove('opacity-1');
      component.classList.add('opacity-0');
      //component.classList.add("-translate-y-80"); //it's a little bit buggy when send multiple alerts
      component.style.margin = '0px';
      component.style.padding = '0px';
    }, 5000);
    setTimeout(() => {
      component.style.setProperty('height', '0', 'important');
    }, 5100);
    setTimeout(() => {
      notificationBox && notificationBox.removeChild(component);
    }, 5700);
  }
  //If you can do something more elegant than timeouts, please do, but i can't
};

export default Notification;
