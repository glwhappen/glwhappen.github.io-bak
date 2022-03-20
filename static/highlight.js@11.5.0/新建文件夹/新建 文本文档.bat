@echo off
setlocal enabledelayedexpansion
for %%i in (*.css) do ren "%%i" "%%~ni".min.css