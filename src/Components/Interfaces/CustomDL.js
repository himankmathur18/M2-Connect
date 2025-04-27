const Download = async(selectedSongs) => {
    try {
        const response = await fetch('/api/download',{
            method: 'POST',
            headers:{
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({songs:selectedSongs})
        })
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'playlist.zip'
        a.click()
        console.log("Downloading songs:", selectedSongs);
        console.log("Response status:", response.status);
    } catch (error) {
        console.error('Download failed',error)
        
    }
}

export default Download