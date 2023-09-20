import React, { useEffect, useState } from 'react'
import  './Profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { userCurrent } from '../../JS/userSlice/userSlice'
import Navbaradmin from './Navbar-admin/Navbaradmin'
import { Link } from 'react-router-dom'
import { deleteproduit, getproduit } from '../../JS/ProduitSlice/produitSlice'

const ProfilUsers = () => {
  const dispatch=useDispatch()
  const [ping, setping] = useState(true)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
dispatch(getproduit())
  }, [ping])
  const produits=useSelector((store)=>store.produit?.produit)

  return (
    <div>
      <Navbaradmin />
      <div className='box-menu'>
<div className='menu'>
    <ul className='link'>
     <li><i class="fa-solid fa-address-card"></i><Link to="/dashbord"> Profil</Link></li>
        <li><i class="fa-solid fa-users"></i><Link to="/produits"> Gestion Produits</Link></li>
        <li><i class="fa-solid fa-paste"></i><Link to='/users'> Gestion users</Link></li>
        <li><i class="fa-solid fa-arrow-right-from-bracket"></i> Log Out</li>
    </ul>
</div>
       <div className="table">
                
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Photo</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr> 
                    {produits?.map((el)=>(
                    <tr>
                        <td> {el?.name} </td>
                        <td>{el?.price} </td>
                        <td><img src={el?.photo} /> </td>
                        <td>{el?.description} </td>
                        <td><i class="fa-solid fa-plus fa-xl" style={{color:"green"}} onClick={handleShow}></i> 
                        <i class="fa-solid fa-trash fa-xl" style={{color:"red"}} onClick={()=>(dispatch(deleteproduit(el._id)),setping(!ping))}></i></td>
                    </tr>
                 ))}
                  
     </div>

    </div>
    {show? (
  <>
  <input type='text' placeholder='name'></input>
  </>
 ):null}
    </div>
  )
}

export default ProfilUsers
                          