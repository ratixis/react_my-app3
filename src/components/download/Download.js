import save from "./../../img/icons/save.svg";


function Download({link}) {
    return(
        <a href={link} class="btn-outline" rel="noreferrer" className="btn-outline">
                     <img src={save} alt="" width="16" height="16" />
                    Download
                </a>
    );
}
export default Download;