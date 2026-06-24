function Navbar(){
    return(
<div className="outer" id="madel">
<nav className="container">
   

    <ul>
        <li> Logo</li>
        <li className="hover">Home</li>
        <li className="hover">About</li>
         <li className="hover">
                <input type="text" name="" placeholder="search Amazon.in" id="" />
                <button>Go</button>
            </li>
            
             <li className="hover"><select name="language" id="" className="select">
                <option value="english">English</option>
                <option value="telugu">Telugu</option>
                <option value="hindi">Hindi
                </option>
                </select>
                </li>
        <li className="hover">Services</li>
        <li className="hover">Contact</li>
    </ul>
</nav>

   
</div>


    );
}export default Navbar;