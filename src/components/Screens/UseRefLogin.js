import React, { useRef } from 'react';
import '../../resources/screens.css';

function UseRefLogin() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    alert(`メールアドレスは${email}です 
パスワードは${password}です`)
    // ログインフォームの値を取得して、APIなどに送信する処理を書く
  };

  return (
    <div className="form-container">
      <h4>UeseRefを使ったログイン画面</h4>
      <form onSubmit={handleSubmit}>
        <label className="form-label">
          Email:
          <input type="email" ref={emailRef} className="form-input" />
        </label>
        <label className="form-label">
          Password:
          <input type="password" ref={passwordRef} className="form-input" />
        </label>
        <button type="submit" className="form-submit">Log In</button>
      </form>
    </div>
  );
}

export default UseRefLogin;
