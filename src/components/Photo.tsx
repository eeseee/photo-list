import Box from "@mui/material/Box";

type Photo = {
    id: number,
    title: string,
    url: string,
}

const Photo = (photo: Photo) => {
    return (
        <>
            <Box
                component='img'
                alt={photo.title}
                src={photo.url}
                sx={{ border: 'solid', borderRadius: '30px', boxShadow: '5px 5px 5px'}}
            />
            <h1 style={{ position: 'absolute', transform: `rotate(${45}deg)`, fontSize: '25px', top: '275px', left: '100px' }}>
                {photo.title}
            </h1>
        </>
    )
};

export default Photo;