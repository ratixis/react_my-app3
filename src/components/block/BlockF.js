import "./projs.css"


function BlockF (active ){
    const clickBlock = 'fplayer tabs-sel fplayer tabs-sel span current  ';
    const normlBlock = 'fplayer fx-1 tabs-sel ';
    
    return(
<body>
                <div className="project-details__desc">
                <div className="fplayer tabs-box">
                        <div className="fctrl fx-row fx-middle">
                        <div className={active ? clickBlock : normlBlock} >
                                       <span >AAI</span>
                                       <span >CO</span>
                                       <span >AOD</span>
                        </div>
                              
                                <div className="ffav icon-left">
                                <span className="js-login"><span className="fa fa-heart-o"></span>Добавить в избранное</span>
                                </div>
                        </div>

                        <div className="tabs-b -box visible">
                        <iframe width="600" height="400" src="" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                        <div className="tabs-b -box">
                        <iframe width="600" height="400" src="" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                        <div className="tabs-b -box" id="">
                        <iframe width="600" height="400" src="" frameborder="0" allowfullscreen=""></iframe>
                        </div>
                        </div>
                </div>
                
</body>
    );
}
export default BlockF;