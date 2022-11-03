/* The  button functionality  */
const sideMenu = document.querySelector('aside')
const menuBtn = document.querySelector('#menu-btn')
const closeBtn = document.querySelector('#close-btn')
const themeBtn = document.querySelector('#theme-btn')


/* Sidebar */

menuBtn.addEventListener('click', () =>  {
    sideMenu.style.display = "block"
})

closeBtn.addEventListener('click', () =>  {
    sideMenu.style.display = "none"
})

/* change theme  */

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables')
    themeBtn.querySelector('span:nth-child(1)').classList.toggle('active')
    themeBtn.querySelector('span:nth-child(2)').classList.toggle('active')
})


/* fill table  */
 
Orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = `
                        <td>${order.productName}</td>
                        <td>${order.productNumber}</td>
                        <td>${order.paymentStatus}</td>
                        <td class="${order.shipping == 
                        'Declined' ? 'danger' : order.shipping == 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                        <td>Details</td>
                        `;
    tr.innerHTML = trContent
    document.querySelector('table tbody').appendChild(tr)
})