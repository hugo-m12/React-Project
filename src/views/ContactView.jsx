function ContactView(){
    return(
        <>
        <>
      <h1 className="addlocaltitle"> Contact Me ! </h1>
      <h3 className="addlocaltitle">
      Inquiries? Photography related Work? Just want to say hello?</h3> 
     <h3 className="addlocaltitle">Use the form below or send me an email <a href="mailto:dummy@email.com">here</a></h3> 
      

      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div className="NewLocationForm">
          <input
            placeholder="Name"
          ></input>
          <input 
            placeholder="Email"
          ></input>
          <textarea
            rows={7}
            placeholder="Message"
          ></textarea>
          <button className="fancy" href="#">
            <span className="top-key"></span>
            <span className="text">Send</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
          </button>
        </div>
      </form>
    </>
        </>
    )
}

export default ContactView