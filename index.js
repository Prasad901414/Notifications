const Notification = props => {
  const {className, iconUrl, message } = props;
  const containerClassName = `notification-container ${className}`;

  return (
    <div className = {containerClassName}>
     <img className = "icon" src={iconUrl}/>
     <p className="message">{message}</p>
     </div>
  )


  
}

const element = (
  //  Write your code here.   
)

ReactDOM.render(element, document.getElementById('root'))
