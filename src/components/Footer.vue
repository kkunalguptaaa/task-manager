<template>
    <footer class="footer">
      <p>Copyright &copy; 2021</p>
      <RouterLink to="/about">About</RouterLink>
    </footer>
  </template>
  
  <style scoped>
  a {
    color: #333;
  }
  .footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: rgb(234, 232, 232);
        color: black;
        padding: 10px 15px;
    }
  </style>