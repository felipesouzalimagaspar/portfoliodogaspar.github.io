import './css/loader.css';
export default function Loader() {
    setInterval(() => {
        document.querySelector(".loader").style.display = "none";
    }, 2600);
    return (
        <div class="loader">
            <span class="spinner"></span>    
        </div>
    );
  }