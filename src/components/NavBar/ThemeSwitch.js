import "./Navbar.css";
 
 
 const ThemeSwitch = () => {
  return (
    <>
        <div class="container-only-for-centering">
  <div class="darkmode-toggle-wrapper">
    <input type="checkbox" id="darkmode-toggle" aria-label="dark mode toggle" class="darkmode-toggle-checkbox" />
    <div class="darkmode-toggle-circle">
    </div>
    <span class="darkmode-toggle-emoji">🌚</span>
    <span class="darkmode-toggle-emoji">🌞</span>
  </div>
</div>
    </>
  )
 }

 export default ThemeSwitch;