
function Item({bodyClass,img,headline,text}) {
    return (
      <div>
          <div className={bodyClass}>
            <div className="icon">
              <a href="#">
                <img src={img} />
              </a>
            </div>
            <h2 className="totaly_text">{headline}</h2>
            <p className="making"> {text} </p>
          </div>
      </div>
    );
}
export default Item