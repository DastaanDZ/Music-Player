import { v4 as uuidv4} from 'uuid';

function chillHop(){
    return[
        {
            name:'Ia zona',
            artist: 'Maydee',
            cover:'https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg',
            id: uuidv4(),
            active: false,
            color: ['#685132','#C4CCD3'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=27455',
            
        },
        {
            name:'Rewind',
            artist: 'SwuM, afternoon bike ride',
            cover:'https://chillhop.com/wp-content/uploads/2021/12/b3079408b79f0ceed3189d6eb804b448fa0c4068-1024x1024.jpg',
            id: uuidv4(),
            active: false,
            color: ['#41606F','#AD5347'],
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=27455',
            
        }

    ]
    export default chillHop;
}