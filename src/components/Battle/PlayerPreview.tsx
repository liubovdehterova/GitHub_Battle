import {FC} from "react";
import {PlayerPreviewProps} from "./types";

const PlayerPreview: FC<PlayerPreviewProps> = (props: PlayerPreviewProps): JSX.Element => (
    <div>
        <div className="column">
            <img className='avatar' src={props.avatar} alt="Avatar"/>
            <h2 className='username'>
                {props.username}
            </h2>
        </div>
        {props.children}
    </div>
)


export default PlayerPreview;