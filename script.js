const blurInput = document.querySelector('.blur-range')
const spacingInput = document.querySelector('.spacing-range')
const colorInput = document.querySelector('.color-picker')
const ranges = [blurInput, spacingInput]
let clicked = false

ranges.forEach(input => {
    
    input.addEventListener('mousedown', ()=>{
        clicked = true
    })
    input.addEventListener('mouseup', ()=>{
        clicked = false
    })
    input.addEventListener('mousemove', handleUpdate)

})

colorInput.addEventListener('change', (event)=>{
    let value = event.target.value;
    document.documentElement.style.setProperty(`--${event.target.name}`, value)
})

function handleUpdate(event){
    if(!clicked)return
    let value = event.target.value;
    const suffix = 'px'
    value+=suffix
    document.documentElement.style.setProperty(`--${this.name}`, value)
}

