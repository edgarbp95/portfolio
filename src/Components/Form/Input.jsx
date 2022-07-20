
const Input = ({type,text,name,required}) => {

    return (
      <div className="relative z-0 w-full mb-2 group">
          <input
              type={type}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-t-0 border-l-0 border-r-0 border-b border-gray-400 appearance-none dark:text-white dark:border-yellow-500 dark:focus:border-customIndigo focus:outline-none focus:ring-0 focus:border-yellow-500 peer"
              placeholder=" "
              name={name}
              required={required}
                  
          />
          <label
              htmlFor={name}
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-yellow-500 peer-focus:dark:text-customIndigo peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
          >
          {text}
          </label>
          
      </div>
    )
  }
  
  export default Input