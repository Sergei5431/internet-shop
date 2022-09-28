export class Popular{


    

    functionShow(){
        let localPopular = localStorage.getItem('popular')
        // console.log( typeof localPopular)
        // console.log(localPopular)
        const allPopularFalse = document.querySelectorAll('[data-popularthis="нет"]')
        // console.log(allPopularFalse)
        
        // if(localPopular === null){data-popularThi
        //     localPopular='false'
        // }
        // console.log(localPopular ==='true')
        if(localPopular =='true'){
            
            allPopularFalse.forEach(el=>{
                el.parentNode.parentNode.style.display = 'none'
                el.parentNode.parentNode.classList.add('mark')

                let btn = document.querySelector('.popular-bird')
                btn.style.background ='blue'
                btn.innerHTML = '&#10004'
           })
        }else{
            allPopularFalse.forEach(el=>{
                el.parentNode.parentNode.style.display = 'flex'
                el.parentNode.parentNode.classList.remove('mark')
            })
        }
    }

    showPopular(){
        document.addEventListener('DOMContentLoaded', this.functionShow(), false);
        let btn = document.querySelector('.popular-bird')
        // console.log(btn)
        btn.addEventListener('click', ()=>{
            if(btn.style.background !=='blue'){
                btn.style.background ='blue'
                btn.innerHTML = '&#10004'
                localStorage.setItem('popular', JSON.stringify(true))
                this.functionShow()
            }else{
                btn.style.background ='transparent'
                btn.innerHTML = ''
                localStorage.setItem('popular', JSON.stringify(false))
                this.functionShow()
            }
        })
    }
}

// export default Popular