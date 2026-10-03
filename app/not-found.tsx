import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap page-intro">
      <p className="kicker">404</p>
      <h1>That page is not on this study.</h1>
      <p className="lede">
        The official site may still have it. Start from the clinics, or go back to ciocenter.com.
      </p>
      <div className="inline-actions">
        <Link className="solid-btn" href="/locations">
          Locations
        </Link>
        <a className="ghost-btn" href="https://ciocenter.com/">
          ciocenter.com
        </a>
      </div>
    </div>
  );
}
