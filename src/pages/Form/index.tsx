function Form(){
    const movies = {
        id:1,
        Image: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/cuFhVLPJ9zC06EMV5XAKNNRJtC4.jpg",
        title: "Transformers: O Início (2024)",
        count: 2,
        score: 4.0
    }
    return(
        <div className="movies-form-container">
            <img src={movies.Image} alt="Transformers: O Início (2024)" /> 
            <div className="movies-card-buttom-container">
                <h3>Transformers: O Início (2024)</h3>
                <form className="movies-form">
              <div className="form-group movies-form-group">
                <label htmlFor="email">
                  informe seu e-mail
                </label>
                <input className="form-control" type="email" id="email"/>
                </div>

                <div className="form-group movies-form-group">
                 <label htmlFor="score">
                  informe sua avaliação
                 </label>
                 <select className="form-control" id="score">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>

                 </select>
                 </div>
		<div className="movies-form-btn-container"/>
              <button className="btn movies-btn" type="submit">SALVAR</button>
             </form>
              <button className="btn movies-btn mt-3">
                CANCELAR
              </button>
            </div>                
           </div>
          
         );
    }
    
    export default Form;