const navigation = document.getElementById('navigation')
const bars = document.getElementById('bars')
const times = document.getElementById('times')
const navbox = document.getElementById('navbox')


navbox.addEventListener('click', function(event) {
    
    if (event.target == bars) {
        bars.style.display = 'none';
        navigation.style.visibility = 'visible';
        times.style.display = 'block';
    }
    if (event.target == times) {
        times.style.display = 'none';
        bars.style.display = 'block';
        navigation.style.visibility = 'hidden';
    }
})

