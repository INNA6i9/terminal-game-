
  <p align="center">
    <img src="https://media4.giphy.com/media/OLPQ6z2hlHmwFc4Hso/giphy.gif" width="230" />
    <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWI5OGp5ZmRhN3A1cGJuNWI1emc0OXJkN2VjMDE0bDI1czVjcWN2eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6OrCT1jVbonHG/giphy.gif" width="370" />
</p>

---











<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Terminal Warrior Playground — VAVID-LLC</title>
<meta name="description" content="Matrix-style page listing cmatrix-like terminal toys and warrior terminal games with install commands and copy/download utilities."/>
<style>
  :root{
    --bg:#000; --panel:rgba(0,10,0,0.6); --accent:#00ff9c; --accent2:#00c6ff; --muted:#7fb09a;
    --glass: rgba(0,0,0,0.45); font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Arial;
  }
  html,body{height:100%;margin:0;background:#000;color:#dfffe6;-webkit-font-smoothing:antialiased}
  /* Matrix canvas */
  #matrix-canvas{position:fixed;inset:0;z-index:0}
  .wrap{position:relative;z-index:2;max-width:1100px;margin:28px auto;padding:20px;border-radius:12px;background:linear-gradient(180deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4));box-shadow:0 10px 40px rgba(0,0,0,0.7);border:1px solid rgba(0,255,160,0.06)}
  header{display:flex;align-items:center;gap:16px}
  .logo{width:84px;height:84px;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;color:#021; font-weight:800;font-size:18px;box-shadow:0 6px 20px rgba(0,255,156,0.06) inset}
  h1{margin:0;font-size:20px}
  p.lead{margin:6px 0 12px;color:var(--muted)}
  .grid{display:grid;grid-template-columns:1fr 340px;gap:18px;margin-top:16px}
  @media (max-width:980px){.grid{grid-template-columns:1fr}}
  .card{background:rgba(0,0,0,0.35);padding:14px;border-radius:10px;border:1px solid rgba(0,255,156,0.03)}
  .muted{color:var(--muted);font-size:13px}
  table{width:100%;border-collapse:collapse;font-size:14px}
  th,td{padding:8px;border-top:1px solid rgba(0,255,156,0.03);vertical-align:top}
  th{color:var(--muted);text-align:left;font-weight:600}
  code.cmd{display:block;background:#051916;padding:8px;border-radius:6px;color:#cfffe6;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace;font-size:13px;white-space:pre-wrap}
  button.copy{background:transparent;border:1px solid rgba(0,255,156,0.08);padding:6px 8px;border-radius:6px;color:var(--accent);cursor:pointer}
  .actions{display:flex;gap:8px;flex-wrap:wrap}
  a.btn{display:inline-block;padding:8px 10px;border-radius:8px;border:1px solid rgba(0,255,156,0.06);text-decoration:none;color:var(--accent);background:transparent}
  footer{margin-top:18px;text-align:center;color:var(--muted);font-size:13px}
  .pill{display:inline-block;padding:6px 8px;border-radius:8px;background:rgba(0,0,0,0.35);border:1px solid rgba(255,255,255,0.02);font-size:13px;color:var(--muted)}
  .section-title{display:flex;align-items:center;gap:10px}
  .mono{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', monospace}
  .note{font-size:12px;color:#9fcfb1}
</style>
</head>
<body>
<canvas id="matrix-canvas"></canvas>

<div class="wrap" role="main" aria-labelledby="page-title">
  <header>
    <div class="logo">VAVID</div>
    <div>
      <h1 id="page-title">Terminal Warrior Playground</h1>
      <p class="lead">Visual terminal toys & warrior games — install commands for Debian/Ubuntu (apt), Arch (pacman), Fedora (dnf) and Termux (pkg). Vendor: <strong>VAVID-LLC</strong> · Developer: <strong>C0DEX-G00D</strong></p>
    </div>
    <div style="margin-left:auto;text-align:right">
      <div class="pill mono" id="updated">Updated: <span id="date"></span></div>
      <div class="muted" style="margin-top:6px">Contact: <a class="mono" href="mailto:security@vavid-llc.com" style="color:var(--accent)">security@vavid-llc.com</a></div>
    </div>
  </header>

  <div class="grid">
    <main class="card" aria-label="Main content">
      <section>
        <div class="section-title"><h2 style="margin:0">Visual Terminal Toys (cmatrix-like)</h2><div style="margin-left:auto" class="note">Fun, harmless; great for demos</div></div>
        <p class="muted">Listed below: 1-line description + install commands for common distros. Use ethically and for demos only.</p>

        <table id="visual-table" aria-describedby="visual-desc" role="table">
          <thead>
            <tr><th>Tool</th><th>Description</th><th>Install (apt / pacman / dnf / pkg)</th></tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>cmatrix</strong></td>
              <td>Matrix-style falling characters (classic).</td>
              <td><code class="cmd">sudo apt install cmatrix
sudo pacman -S cmatrix
sudo dnf install -y cmatrix
pkg install cmatrix</code><button class="copy" data-cmd="cmatrix">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>pipes.sh</strong></td>
              <td>ASCII pipe generator script (git-run).</td>
              <td><code class="cmd">git clone https://github.com/pipeseroni/pipes.sh.git && cd pipes.sh && ./pipes.sh</code><button class="copy" data-cmd="pipes.sh">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>hollywood</strong></td>
              <td>Movie-style multi-pane terminal demo (presentation only).</td>
              <td><code class="cmd">sudo apt install hollywood
# Arch: AUR package
sudo pacman -S hollywood
sudo dnf install -y hollywood
# Termux: build from source</code><button class="copy" data-cmd="hollywood">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>nyancat</strong></td>
              <td>Nyan Cat animation in terminal.</td>
              <td><code class="cmd">sudo apt install nyancat
sudo pacman -S nyancat
pkg install nyancat</code><button class="copy" data-cmd="nyancat">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>asciiquarium</strong></td>
              <td>ASCII aquarium (Perl script).</td>
              <td><code class="cmd"># download & run
wget -O asciiquarium https://raw.githubusercontent.com/cmatsuoka/asciiquarium/master/asciiquarium
chmod +x asciiquarium
./asciiquarium</code><button class="copy" data-cmd="asciiquarium">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>cava</strong></td>
              <td>Terminal audio visualizer (works with ALSA/Pulse).</td>
              <td><code class="cmd">sudo apt install cava
sudo pacman -S cava
sudo dnf install -y cava
# Termux: limited support</code><button class="copy" data-cmd="cava">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>sl</strong></td>
              <td>Steam locomotive animation (fun surprise).</td>
              <td><code class="cmd">sudo apt install sl
sudo pacman -S sl
sudo dnf install -y sl
pkg install sl</code><button class="copy" data-cmd="sl">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>neofetch</strong></td>
              <td>Stylish system info display (not a game but popular for screenshots).</td>
              <td><code class="cmd">sudo apt install neofetch
sudo pacman -S neofetch
sudo dnf install -y neofetch
pkg install neofetch</code><button class="copy" data-cmd="neofetch">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>tty-clock</strong></td>
              <td>Terminal fullscreen clock (nice for demos).</td>
              <td><code class="cmd">sudo apt install tty-clock
sudo pacman -S tty-clock
# or build from source</code><button class="copy" data-cmd="tty-clock">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>cowsay + fortune</strong></td>
              <td>Text mascot + random messages.</td>
              <td><code class="cmd">sudo apt install cowsay fortune-mod
sudo pacman -S cowsay fortune-mod
sudo dnf install -y cowsay fortune-mod
pkg install cowsay fortune</code><button class="copy" data-cmd="cowsay | fortune">Copy run</button></td>
            </tr>

          </tbody>
        </table>

        <hr style="margin:12px 0;border:none;border-top:1px solid rgba(0,255,156,0.04)"/>

        <div class="section-title"><h2 style="margin:0">Terminal Games (Warrior-style)</h2><div style="margin-left:auto" class="note">Play in a terminal — many are in repos</div></div>
        <p class="muted">Classic roguelikes, arcade and tiny console games.</p>

        <table id="games-table" role="table">
          <thead><tr><th>Game</th><th>Description</th><th>Install (apt / pacman / dnf / pkg)</th></tr></thead>
          <tbody>
            <tr>
              <td><strong>nethack</strong></td>
              <td>Deep, classic rogue-like dungeon crawler.</td>
              <td><code class="cmd">sudo apt install nethack-console
sudo pacman -S nethack
sudo dnf install -y nethack
pkg install nethack</code><button class="copy" data-cmd="nethack">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>crawl (Dungeon Crawl: Stone Soup)</strong></td>
              <td>Modern roguelike with good UX.</td>
              <td><code class="cmd">sudo apt install crawl
sudo pacman -S crawl
sudo dnf install -y crawl</code><button class="copy" data-cmd="crawl">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>ninvaders</strong></td>
              <td>Space Invaders in the terminal.</td>
              <td><code class="cmd">sudo apt install ninvaders
sudo pacman -S ninvaders
sudo dnf install -y ninvaders
# Termux: check pkg</code><button class="copy" data-cmd="ninvaders">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>moon-buggy</strong></td>
              <td>Simple side-scroller (fun demo).</td>
              <td><code class="cmd">sudo apt install moon-buggy
sudo pacman -S moon-buggy
sudo dnf install -y moon-buggy</code><button class="copy" data-cmd="moon-buggy">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>pacman4console</strong></td>
              <td>Pac-Man in the console.</td>
              <td><code class="cmd">sudo apt install pacman4console
# Arch: AUR or package name varies</code><button class="copy" data-cmd="pacman4console">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>bastet</strong></td>
              <td>Tetris clone with good RNG.</td>
              <td><code class="cmd">sudo apt install bastet
sudo pacman -S bastet
sudo dnf install -y bastet</code><button class="copy" data-cmd="bastet">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>robotfindskitten</strong></td>
              <td>Whimsical zen-like terminal game.</td>
              <td><code class="cmd">sudo apt install robotfindskitten
sudo pacman -S robotfindskitten</code><button class="copy" data-cmd="robotfindskitten">Copy run</button></td>
            </tr>

            <tr>
              <td><strong>nsnake</strong></td>
              <td>Classic snake game for the terminal.</td>
              <td><code class="cmd">sudo apt install nsnake
sudo pacman -S nsnake</code><button class="copy" data-cmd="nsnake">Copy run</button></td>
            </tr>

          </tbody>
        </table>

        <hr style="margin:12px 0;border:none;border-top:1px solid rgba(0,255,156,0.04)"/>

        <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:8px">
          <a class="btn" id="download-all">Download All Commands (TXT)</a>
          <a class="btn" id="open-commands">Open Commands</a>
          <div class="muted" style="margin-left:auto">Tip: hover any command to select and copy quickly.</div>
        </div>

      </section>
    </main>

    <aside class="card" aria-label="Sidebar">
      <h3 style="margin-top:0">Quick tools</h3>
      <p class="muted">Buttons to help you grab the files and copy commands.</p>
      <div class="actions" style="margin-top:8px">
        <a class="btn" id="download-zip">Download Full Kit (ZIP)</a>
        <a class="btn" id="download-html">Download This Page</a>
        <a class="btn" id="run-demo">Run Matrix Demo</a>
      </div>

      <hr style="margin:12px 0;border:none;border-top:1px solid rgba(0,255,156,0.03)"/>

      <h4>Contact</h4>
      <div class="muted"><strong>Vendor:</strong> VAVID-LLC<br/><strong>Developer:</strong> C0DEX-G00D<br/>security@vavid-llc.com</div>
      <div style="margin-top:10px" class="note">This page lists harmless terminal toys and games for demos and education. Install tools from official repos when possible.</div>
    </aside>
  </div>

  <footer>VAVID-LLC · C0DEX-G00D ☠️ — For demo & training use only</footer>
</div>

<script>
/* Matrix rain background */
(function matrix(){
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  let width = canvas.width = innerWidth;
  let height = canvas.height = innerHeight;
  const cols = Math.floor(width/14) + 1;
  const ypos = Array(cols).fill(0);

  const letters = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function draw(){
    ctx.fillStyle = 'rgba(0,0,0,0.15)';
    ctx.fillRect(0,0,width,height);
    ctx.fillStyle = '--accent';
    for(let i=0;i<ypos.length;i++){
      const txt = letters.charAt(Math.floor(Math.random()*letters.length));
      const x = i*14;
      ctx.fillStyle = 'rgba(0,255,156,' + (Math.random()*0.9+0.1) + ')';
      ctx.font = '13px monospace';
      ctx.fillText(txt, x, ypos[i]*14);
      if(ypos[i]*14 > height && Math.random() > 0.975) ypos[i]=0;
      ypos[i]++;
    }
  }
  let interval = setInterval(draw,45);
  addEventListener('resize', ()=>{ width = canvas.width = innerWidth; height = canvas.height = innerHeight; const newCols = Math.floor(width/14)+1; ypos.length = newCols; for(let i=0;i<newCols;i++) if(!ypos[i]) ypos[i]=0; });
})();

/* Page simple helpers */
document.getElementById('date').innerText = new Date().toLocaleDateString();

/* Copy buttons (run command copy or code block copy) */
document.querySelectorAll('button.copy').forEach(btn=>{
  btn.addEventListener('click', async ()=>{
    const run = btn.getAttribute('data-cmd');
    try{
      await navigator.clipboard.writeText(run);
      btn.textContent = 'Copied';
      setTimeout(()=>btn.textContent='Copy run',1200);
    }catch(e){
      alert('Clipboard copy failed — select and copy manually.');
    }
  });
});

/* Build a single text file containing all commands (from table code blocks) */
function gatherCommands(){
  const blocks = Array.from(document.querySelectorAll('code.cmd'));
  const lines = [];
  blocks.forEach((b, idx)=>{
    const title = b.closest('tr') ? b.closest('tr').querySelector('td strong') : null;
    lines.push('---');
    if(title) lines.push('[' + title.innerText.trim() + ']');
    lines.push(b.innerText.trim());
  });
  return lines.join('\n') + '\n';
}

document.getElementById('download-all').addEventListener('click', function(e){
  e.preventDefault();
  const txt = gatherCommands();
  const blob = new Blob([txt], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'terminal-warrior-commands.txt'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

document.getElementById('open-commands').addEventListener('click', function(e){
  e.preventDefault();
  const txt = gatherCommands();
  const w = window.open('', '_blank');
  w.document.write('<pre style="white-space:pre-wrap;font-family:monospace;background:#000;color:#0f9;padding:16px">' + escapeHtml(txt) + '</pre>');
  w.document.title = 'All Commands';
  w.document.close();
});

/* Download page / zip (simple ZIP without external libs) */
async function downloadAsFile(filename, content, mime='text/plain'){
  const blob = new Blob([content], {type:mime});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}
document.getElementById('download-html').addEventListener('click', function(e){
  e.preventDefault();
  downloadAsFile('terminal-warrior-playground.html', document.documentElement.outerHTML, 'text/html');
});

/* Simple ZIP creator for the kit (no external lib) — creates a tiny ZIP using JSZip if available, else just bundles commands.txt + html */
document.getElementById('download-zip').addEventListener('click', async function(e){
  e.preventDefault();
  // If JSZip is available, use it; otherwise fallback to downloading a small bundle (HTML + commands)
  if(window.JSZip){
    const zip = new JSZip();
    zip.file('terminal-warrior-playground.html', document.documentElement.outerHTML);
    zip.file('terminal-warrior-commands.txt', gatherCommands());
    zip.file('readme.txt', 'Terminal Warrior Playground — VAVID-LLC\\nIncluded: HTML, commands. Edit files locally as needed.');
    const blob = await zip.generateAsync({type:'blob'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href=url; a.download='terminal-warrior-kit.zip'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    return;
  }
  // fallback (separate downloads)
  downloadAsFile('terminal-warrior-commands.txt', gatherCommands(), 'text/plain');
  downloadAsFile('terminal-warrior-playground.html', document.documentElement.outerHTML, 'text/html');
  alert('Downloaded page + commands separately (JSZip not available).');
});

/* Run demo (just triggers a full-screen cmatrix-like quick text animation inside a new window) */
document.getElementById('run-demo').addEventListener('click', function(e){
  e.preventDefault();
  const demo = window.open('', '_blank', 'noopener');
  demo.document.write(`<html><head><title>Matrix Demo</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;background:black;color:#0f9;font-family:monospace}canvas{display:block}</style></head><body><canvas id="c"></canvas><script>
  (function(){const c=document.getElementById('c'),ctx=c.getContext('2d');function resize(){c.width=innerWidth;c.height=innerHeight}addEventListener('resize',resize);resize();const cols=Math.floor(c.width/14);const ypos=new Array(cols).fill(0);const letters='アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';setInterval(()=>{ctx.fillStyle='rgba(0,0,0,0.15)';ctx.fillRect(0,0,c.width,c.height);ctx.fillStyle='#0f9';ctx.font='13px monospace';for(let i=0;i<ypos.length;i++){const txt=letters.charAt(Math.floor(Math.random()*letters.length));ctx.fillText(txt,i*14,ypos[i]*14);if(ypos[i]*14>c.height && Math.random()>0.975) ypos[i]=0;ypos[i]++;}},45);
  })();
  </script></body></html>`);
  demo.focus();
});

/* escape for display */
function escapeHtml(s){ return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

/* open-commands helper */
function bindCodeClicks(){
  document.querySelectorAll('code.cmd').forEach(code=>{
    code.addEventListener('click', ()=>{
      // select text on click
      const range = document.createRange();
      range.selectNodeContents(code);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });
  });
}
bindCodeClicks();

</script>
</body>
</html>

