const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav, {});

const ss = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(ss, {});

const dropDown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropDown, {});

const collapsible = document.querySelectorAll('.collapsible');
M.Collapsible.init(collapsible, {});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});

const tabs = document.querySelectorAll('.tabs');
M.Tabs.init(tabs, {
    swipeable: true
});


const fab = document.querySelector('.fixed-action-btn');
M.FloatingActionButton.init(fab, {
    direction: 'left'
});

