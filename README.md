# 创建NEXT
pnpm create next-app

√ What is your project named? ... tauri-entellitrade
√ Would you like to use TypeScript? ... No / Yes
√ Would you like to use ESLint? ... No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
√ Would you like to use `src/` directory? ... No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes

(not necessary)cargo install tauri-cli
cargo tauri init

cargo tauri build
修改tauri.conf.json中tauri > bundle > identifier为com.tauri.build
next.config.mjs设置output: export

# 启动NEXT
pnpm next dev
# 打包next
pnpm next build
# 启动Tauri
cargo tauri dev
# 打包Tauri
cargo tauri build