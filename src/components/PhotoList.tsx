import Photo from "./Photo"

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";

const PhotoList = (data: any) => {
    let photoList: Array<Photo> = Object.values(data);

    return (
        <Container sx={{height: '100%', width: '100%'}}>  
            <ImageList sx={{ display: 'flex', flexDirection:'row' }}>
                {photoList.map((photo: Photo) => (
                    <ImageListItem key={photo.id} sx={{padding:'1em'}}>
                        <Photo {...photo}/>
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
};

export default PhotoList;