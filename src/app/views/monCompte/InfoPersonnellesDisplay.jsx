import React from 'react';

const InfoPersonnellesDisplay = () => {
  return (
    <div>
      <ul className='nav row row-cols-1 row-cols-md-2'>
        <li className='px-3 py-2'>
          <div>
            <label>Full Name</label>
            <input type='text' className='form-control' name='FullName​' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>E-mail</label>
            <input type='email' className='form-control' name='E-mail' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>Phone​</label>
            <input type='text' className='form-control' name='Phone' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>Web site​</label>
            <input type='text' className='form-control' name='Website​' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>Facebook​</label>
            <input type='text' className='form-control' name='Facebook​​' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>Linkedin​</label>
            <input type='text' className='form-control' name='Linkedin​' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>Instagram​</label>
            <input type='text' className='form-control' name='Instagram​' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <div>
            <label>Twitter​</label>
            <input type='text' className='form-control' name='Twitter​' />
          </div>
        </li>
        <li className='px-3 py-2'>
          <textarea
            className='form-control'
            rows='10'
            value='Courriel Text to connect with the customer : (500 characters)​

 I confirm that I have received your request and I thank you for your confidence. ​

I will contact you very soon to have more information on your project before agreeing on an appointment as soon as possible. ​

​

Feel free to contact me directly, you will find my contact information below.​

​

I look forward to our next meeting and wish you a very nice day.​

xxxxxx​'
          ></textarea>
        </li>
        <li className='px-3 py-2'>
          <textarea
            className='form-control'
            rows='10'
            value='* SMS Text to connect with the customer : (500 characters)​

                                I confirm that I have received your request and I thank you for your confidence. ​
                                
                                I will contact you very soon ​
                                
                                xxxxxx​​'
          ></textarea>
        </li>
      </ul>
    </div>
  );
};

export default InfoPersonnellesDisplay;
