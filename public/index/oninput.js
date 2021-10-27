const search = async ( type, value) => {
    try {
        if( !document.getElementById('link').checkValidity() ) return;
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
            } else {
                document.getElementById('uniqueId').value = "";
                document.getElementById('uniqueId').disabled = false;
            }
        } else {
            if(data.content){
                console.log("Not Possible");
                document.getElementById('submit').disabled = true;
            } else {
                document.getElementById('submit').disabled = false;
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
    } catch(e) {
        console.log( e );
    }
}