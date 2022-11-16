import { useState } from 'react'
import './Navbar.css'
import { useStateContext } from '../Context/Cart/CartContext'

const Navbar = () => {
  const [show, setShow] = useState(false)

  const {
    Productdata,
    setProductdata,
    inc,
    setInc,
    ele,
    IncItem,
    setIncITem,
  } = useStateContext()
  const handleclick = (el) => {
    setShow(show === true ? false : true)
    const adddata = Productdata.filter((Item) => Item.id !== el.id)

    setProductdata(adddata)
    console.log(adddata)
  }
  const ondelete = (el) => {
    // logic to delete the data  and match the id and then remove the id
    const removeItem = Productdata.filter((Item) => Item.id !== el.id)

    setProductdata(removeItem)
  }

  const increasing = () => {
    // Logic to fetch the item id and then increment it

    // Increment item
    setIncITem(IncItem + 1)
  }
  const decreasing = (id) => {
    // logic to fetch the item id and then decrease it

    // if Item is not less than zero or greater then zero then decrease the item
    if (IncItem != 0 && IncItem > 0) {
      setIncITem(IncItem - 1)
    } else {
      setIncITem(IncItem)
    }
  }
  const onClearcart = () => {
    setProductdata([])
  }

  const [cart, setCart] = useState(0)

  return (
    <>
      <div className="nav">
        <a href="#">
          <i class="Home"></i>
        </a>
        home
        <div onClick={(el) => handleclick(el)}>
          <img src="./images/shopping_cart.png" width={30} height={30} />
          <button>{inc}</button>
        </div>
      </div>
      <div className={`container  ${show ? 'show' : 'hide'} `}>
        {Productdata.length === 0 && (
          <div className="alert alert-info">Cart is empty</div>
        )}
        {Productdata.map((el) => (
          <div class="list-group">
            <div>
              <a
                href="#"
                className="list-group-item list-group-item-action active item_setting"
                aria-current="true"
              >
                <div>
                  <img src={el.img} className="listning" />
                </div>
                <div>
                  <p className="text">{el.id}</p>
                  <h5 className="mb-1 "></h5>

                  <p className="mb-1 text">{el.Title}</p>
                  <small className="text">{el.Prize}</small>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-info"
                    onClick={() => increasing()}
                  >
                    +
                  </button>
                  <button type="button" class="btn btn-sm btn-success">
                    {IncItem}
                  </button>

                  <button
                    type="button"
                    class="btn btn-sm btn-info"
                    onClick={() => decreasing()}
                    disabled={IncItem == 1}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    class="btn btn-sm btn-danger"
                    onClick={() => ondelete(el)}
                  >
                    DELETE
                  </button>
                </div>
              </a>
            </div>
          </div>
          //   <div className="card_b">
          //   <div className="icon_b">b</div>

          //   <img src="\images\headphone.png" width={272} height={272} />
          //   <p>boat headphone</p>
          //   <p>&#8377; 2500</p>
          //   <button onClick={() => setInc(inc+1)} className="btn btn-danger text-danger">
          //     ADD TO CART
          //   </button>
          // </div>
        ))}
        <div>
          <button
            type="button"
            class="btn btn-sm btn-warning"
            onClick={() => onClearcart()}
            hidden={Productdata.length == 0}
          >
            CLEARCART
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
