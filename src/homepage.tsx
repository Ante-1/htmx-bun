export function Homepage({ title }: { title: string }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="public/htmx@1.9.0.js"></script>

        <title>{title}</title>
      </head>
      <body>
        <h1>HTMX Demo</h1>
        <div hx-post="/clicked" hx-swap="none" hx-trigger="click throttle:1s">
          Click Me
        </div>
        <button hx-get="/hello" hx-swap="outerHTML transition:true">
          hey
        </button>
      </body>
    </html>
  );
}
