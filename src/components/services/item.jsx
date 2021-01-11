function ServiceItem({icon,headline,text,className}) {
    return (
      <div>
          <div class={className} >
            <div class="icon">
              <a href="#">
                <img src={icon} />
              </a>
            </div>
            <h2 class="totaly_text">{ headline }</h2>
            <p class="making">{text} </p>
          </div>
      </div>
    );
}

export default ServiceItem