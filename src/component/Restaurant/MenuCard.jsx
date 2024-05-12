import {Accordion,AccordionSummary,AccordionDetails,FormControlLabel,FormGroup,Checkbox, Button} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const demo = [
    {
        category: "Meat",
        ingredients: ["Mutton"]
    },
    {
      category:"sides",
      ingredients:["barqoq"]
    },
    {
      category: "vegetables",
      ingredients: ["ognion","Tomato"]
    }
]

const MenuCard = () => {
  const handleChechBoxChange = (value) => {
    console.log("value");

  }
    return(
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img className='w-[7rem] h-[7rem] object-cover' src="https://images.pexels.com/photos/2291603/pexels-photo-2291603.jpeg?auto=compress&cs=tinysrgb&w=600"
                 alt="" />
                 <div className='"space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semiblod text-xl'>Tajine</p>
                    <p>55</p>
                    <p className='text-gray-400'>very tasty tajine</p>

                 </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <from>
            <div className='flex gap-5 flex-wrap'>
              {
                demo.map((item) =>
                <div>
                  <p>{item.category}</p>

                   <FormGroup>
               {item.ingredients.map((item) => ( <FormControlLabel control=
               {<Checkbox onChange={() => handleChechBoxChange(item)} />} label={item} />))
               }
              </FormGroup>
                </div>
                )
              }

            </div>
            <div className='pt-5'>
              <Button variant ="contained" disabled= {false} type="submit">{true?"Add to Cart" : "Out of Stock"}</Button>
            </div>
          </from>
        </AccordionDetails>
      </Accordion>
    )
}

export default MenuCard