  // //Checkbox
  // const [maquetar, setMaquetar] = useState(false);
  // const [seo, setSeo] = useState(false);
  // const [googleAdds, setGoogleAdds] = useState(false);
 
  // //Checkbox handlers
  // function onChangeChecks (e) {
  //   if(e.target.id ==='maquetar') setMaquetar(!maquetar);
  //   if(e.target.id ==='seo') setSeo(!seo);
  //   if(e.target.id ==='googleAdds') setGoogleAdds(!googleAdds);
  // }

  // //Total summation from checkbox
  // function totalChecks(e){
  //   let id = e.target.id;
  //   let check = e.target.checked;
  //   if(id === 'maquetar' && check) setTotal(total+400);
  //   if(id === 'maquetar' && !check) setTotal(total-400);
  //   if(id === 'seo' && check ) setTotal(total+300);
  //   if(id === 'seo' && !check)  setTotal(total-300);
  //   if(id === 'googleAdds' && check) setTotal(total+200);
  //   if(id === 'googleAdds' && !check) setTotal(total-200);
  // }

  // useEffect(()=>{
  //   total = 0;
  //   if (checkState.maquetar) setTotal(total+=400);
  //   if (checkState.seo) setTotal(total+=300);
  //   if (checkState.googleAdds) setTotal(total+=200);
  // }, [checkState] )

  // //Inputs text   
  // let [paginas, setPaginas] = useState(0);
  // let [idiomas, setIdiomas] = useState(0);

  // const handlePaginas = (e) => setPaginas(parseInt(e.target.value));
  // const handleIdiomas = (e) => setIdiomas(parseInt(e.target.value));

  // //Maquetar subinputs bottons 
  // const sumarPaginas = () => setPaginas(++paginas)  
  // const restarPaginas = () => (!paginas) ? setPaginas(paginas) : setPaginas(--paginas); 
  // const sumarIdiomas = () => setIdiomas(++idiomas);
  // const restarIdiomas = () => (!idiomas) ? setIdiomas(idiomas) : setIdiomas(--idiomas);