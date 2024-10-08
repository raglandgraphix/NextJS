export default function FacebrickTextures(){
const textures = ['smooth','velour','matt','Velvetex','Vertical Score','Artisan'];

return(
    <div>
        
       {textures.map((color) => (
       <p key='index'>{color}</p>

        ))
        };
    
    </div>
)

}