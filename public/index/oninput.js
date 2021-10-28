const search = async ( type, value) => {
    try {
        // document.getElementsByClassName('copy').map( item => item.style.display = "flex" );
        for(let item of document.getElementsByClassName('copy')) item.style.display = "none";
        if( !document.getElementById('link').checkValidity() || ( type === 'LINK' && !value)  ) {
            document.getElementById('uniqueId').disabled = true;
            document.getElementById('submit').disabled = true;
            // RED
            document.getElementById('link').style.borderColor = '#cf222e';
            document.getElementById('link').style.backgroundColor = '#cf222e33';                
            return;
        }
        if( type === 'UNIQUE-ID' && !value ){
            document.getElementById('submit').disabled = true;
            // RED
            document.getElementById('uniqueId').style.borderColor = '#cf222e';
            document.getElementById('uniqueId').style.backgroundColor = '#cf222e33';
            return;
        }
        console.log( value );
        const res = await fetch(`http://localhost:3000/search`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ value, type })
        });
        const data = await res.json();
        if( type === 'LINK'){
            if(data.content){
                document.getElementById('uniqueId').value = data.content.uniqueId;
                document.getElementById('uniqueId').disabled = true;
                document.getElementById('submit').disabled = true;
                // RED
                document.getElementById('link').style.borderColor = '#cf222e';
                document.getElementById('link').style.backgroundColor = '#cf222e33'; 
            } else {
                document.getElementById('uniqueId').value = "";
                document.getElementById('uniqueId').disabled = false;
                // GREEN
                document.getElementById('link').style.borderColor = '#2da44e';
                document.getElementById('link').style.backgroundColor = '#2da44e33'; 
            }
        } else {
            if(data.content){
                console.log("Not Possible");
                document.getElementById('submit').disabled = true;
                // RED
                document.getElementById('uniqueId').style.borderColor = '#cf222e';
                document.getElementById('uniqueId').style.backgroundColor = '#cf222e33';
            } else {
                document.getElementById('submit').disabled = false;
                // GREEN
                document.getElementById('uniqueId').style.borderColor = '#2da44e';
                document.getElementById('uniqueId').style.backgroundColor = '#2da44e33';
            }
        }
        console.log( data );
    } catch(e) {
        console.log( e );
    }
}

const create = async () => {
    try {
        const link = document.getElementById('link').value;
        const uniqueId = document.getElementById('uniqueId').value;
        console.log({ link, uniqueId });
        const res = await fetch(`http://localhost:3000/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ link, uniqueId })
        });
        const data = await res.json();
        console.log( data );
        if(data.success){        
            for(let item of document.getElementsByClassName('copy')) item.style.display = "flex";
            // document.getElementById('link').value = '';
            // document.getElementById('uniqueId').value = '';
            // document.getElementById('uniqueId').disabled = true;
            document.getElementById('submit').disabled = true;
        }
    } catch(e) {
        console.log( e );
    }
}