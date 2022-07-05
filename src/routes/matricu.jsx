import {useParams} from "react-router-dom";
import { getMatricu } from "../data";
export default function Matricu(){
    let params = useParams();
    let matricu = getMatricu(parseInt(params.matricu));

    return(
        <h2>
        <h2>Matricula:{matricu.number}</h2>
        <p>
            Nombre:{matricu.name}
        </p>
        </h2>
    );

    }