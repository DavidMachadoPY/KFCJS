let root = document.getElementById("root")

    let container = document.createElement('div')
    container.classList.add("container")
    root.appendChild(container)

        let row = document.createElement('div')
        row.classList.add("row", "mt-3")
        container.appendChild(row)


            let getrow = document.querySelector('.row');

            let col = document.createElement('div');
            col.classList.add("col-12");
            getrow.appendChild(col);


                let col1 = document.querySelector('.col-12')

                let img = document.createElement('img')
                img.setAttribute('id', 'slogan');
                img.setAttribute('src', 'img/slogan.png')
                col1.appendChild(img)

    let container1 = document.createElement('div');
    container1.classList.add('container', 'text-start');
    root.appendChild(container1);

        
        let row1 = document.createElement('div');
        row1.classList.add('row', 'mt-5', 'mb-3');
        container1.appendChild(row1);

            let row1col6 = document.querySelector('.mt-5')

            let col6one = document.createElement('div');
            col6one.classList.add('col-md-6');
            row1col6.appendChild(col6one);

                

            let col6two = document.createElement('div');
            col6two.classList.add('col-md-6');
            row1col6.appendChild(col6two);

    let container2 = document.createElement('div');
    container2.classList.add('container', 'text-start');
    root.appendChild(container2);

        
        let row2 = document.createElement('div');
        row2.classList.add('row', 'mt-5', 'mb-3');
        container2.appendChild(row2);