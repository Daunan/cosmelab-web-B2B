@echo off
rem Copy files
robocopy . "C:\Users\dksek\Desktop\cosmelab-web-B2B" /E /XD .git .next node_modules
if %ERRORLEVEL% GEQ 8 (
    echo Robocopy failed
    exit /b %ERRORLEVEL%
)

rem Switch directory
cd /d "C:\Users\dksek\Desktop\cosmelab-web-B2B"

rem Git setup
git init
git remote add origin https://github.com/Daunan/cosmelab-web-B2B.git
git add .
git commit -m "Initial commit from existing project"
git push -u origin main

echo Done
