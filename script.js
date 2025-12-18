// Course Data - Based on global curricula standards [web:1][web:5]
const COURSE_MODULES = [
    {
        id: 1,
        title: "Excel Fundamentals",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>🎯 Module 1: Excel Mastery</h2>
                <div class="video-placeholder">📹 Excel Pivot Tables & VLOOKUP Tutorial (15:32)</div>
                <p>Excel remains the #1 tool for 85% of data analyst jobs worldwide. Master these core functions:</p>
                <ul>
                    <li>VLOOKUP, INDEX/MATCH, XLOOKUP</li>
                    <li>Pivot Tables & Charts</li>
                    <li>Data Validation & Conditional Formatting</li>
                </ul>
                <div class="code-snippet excel">
                    =VLOOKUP(A2, SalesData, 3, FALSE)
                    =SUMIFS(Revenue, Region, "North", Product, "Electronics")
                </div>
                <button class="exercise-btn" onclick="launchExcelSimulator()">🚀 Excel Practice</button>
            </div>
        `,
        quiz: [
            { q: "What function finds data in a table?", a: ["VLOOKUP", "SUMIF", "AVERAGE", "COUNT"], correct: 0 },
            { q: "Pivot Tables summarize:", a: ["Single cells", "Multiple columns", "Formulas only", "Charts"], correct: 1 }
        ]
    },
    {
        id: 2,
        title: "SQL Basics",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>⚙️ Module 2: SQL Foundations</h2>
                <div class="video-placeholder">📹 SQL SELECT, WHERE, JOIN (18:45)</div>
                <p>SQL powers 70% of data analyst roles globally. Used by Amazon, Google, banks worldwide.</p>
                <div class="code-snippet sql">
                    SELECT category, SUM(revenue) as total_sales
                    FROM ecommerce_sales
                    GROUP BY category
                    ORDER BY total_sales DESC;
                </div>
                <button class="exercise-btn" onclick="launchSQLBuilder()">🛠️ SQL Query Builder</button>
                <div class="dataset-preview">
                    <table class="dataset-table">
                        <thead><tr><th>Category</th><th>Revenue</th><th>Orders</th></tr></thead>
                        <tbody>
                            <tr><td>Electronics</td><td>$58K</td><td>1,245</td></tr>
                            <tr><td>Fashion</td><td>$42K</td><td>2,180</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        `,
        quiz: [
            { q: "What clause filters rows?", a: ["SELECT", "WHERE", "GROUP BY", "ORDER BY"], correct: 1 },
            { q: "SUM() requires:", a: ["WHERE", "GROUP BY", "JOIN", "LIMIT"], correct: 1 }
        ]
    },
    {
        id: 3,
        title: "Python Pandas",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>🐍 Module 3: Python Data Analysis</h2>
                <div class="video-placeholder">📹 Pandas DataFrames & Cleaning (22:10)</div>
                <p>Python adopted by 65% of analysts (2025 Stack Overflow Survey). Industry standard for automation.</p>
                <div class="code-snippet python">
                    import pandas as pd
                    df = pd.read_csv('ecommerce.csv')
                    sales_by_category = df.groupby('category')['revenue'].sum()
                    print(sales_by_category.sort_values(ascending=False))
                </div>
                <button class="exercise-btn" onclick="launchPythonEditor()">💻 Python Playground</button>
            </div>
        `,
        quiz: [
            { q: "Pandas reads CSV with:", a: ["read_csv()", "load_csv()", "import_csv()", "open_csv()"], correct: 0 },
            { q: "groupby() creates:", a: ["Rows", "Aggregations", "Filters", "Plots"], correct: 1 }
        ]
    },
    {
        id: 4,
        title: "Statistics Basics",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>📈 Module 4: Statistics Fundamentals</h2>
                <div class="video-placeholder">📹 Mean, Median, Standard Deviation (16:20)</div>
                <p>Core math for hypothesis testing used across finance, healthcare, e-commerce analytics.</p>
                <div class="chart-container">
                    <canvas id="sales-chart" width="400" height="200"></canvas>
                </div>
            </div>
        `,
        quiz: [
            { q: "Standard deviation measures:", a: ["Average", "Spread", "Median", "Mode"], correct: 1 },
            { q: "Correlation range:", a: ["0 to 1", "-1 to 1", "0 to 100", "-10 to 10"], correct: 1 }
        ]
    },
    {
        id: 5,
        title: "Advanced SQL",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>🔍 Module 5: Advanced SQL</h2>
                <div class="video-placeholder">📹 Window Functions & CTEs (25:30)</div>
                <p>Master complex queries for production databases (used by 90% of enterprise analysts).</p>
                <div class="code-snippet sql">
                    WITH monthly_sales AS (
                        SELECT DATE_TRUNC('month', order_date) as month, SUM(revenue)
                        FROM orders GROUP BY 1
                    )
                    SELECT month, SUM(revenue) OVER (ORDER BY month) as running_total
                    FROM monthly_sales;
                </div>
            </div>
        `,
        quiz: [
            { q: "Window functions use:", a: ["GROUP BY", "OVER()", "HAVING", "DISTINCT"], correct: 1 },
            { q: "CTE starts with:", a: ["WITH", "SELECT", "CREATE", "INSERT"], correct: 0 }
        ]
    },
    {
        id: 6,
        title: "NumPy Arrays",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>⚡ Module 6: NumPy Performance</h2>
                <div class="video-placeholder">📹 NumPy vs Lists Speed (19:45)</div>
                <p>10x faster than Pandas for math operations. Essential for large datasets.</p>
                <div class="code-snippet python">
                    import numpy as np
                    sales = np.array([45000, 52000, 58000])
                    avg_sales = np.mean(sales)
                    std_sales = np.std(sales)
                </div>
            </div>
        `,
        quiz: [
            { q: "NumPy advantage:", a: ["Readability", "Speed", "Memory", "All"], correct: 3 },
            { q: "np.mean() calculates:", a: ["Median", "Average", "Mode", "Variance"], correct: 1 }
        ]
    },
    {
        id: 7,
        title: "Tableau Dashboards",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>📊 Module 7: Tableau Visualization</h2>
                <div class="video-placeholder">📹 Interactive Dashboards (28:15)</div>
                <p>Tableau used by 40% of Fortune 500 companies for executive reporting.</p>
            </div>
        `,
        quiz: [
            { q: "Tableau connects to:", a: ["Excel only", "Multiple sources", "Python only", "SQL only"], correct: 1 },
            { q: "Calculated fields use:", a: ["SQL", "Tableau formulas", "Python", "Excel"], correct: 1 }
        ]
    },
    {
        id: 8,
        title: "Power BI",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>⚡ Module 8: Power BI Enterprise</h2>
                <div class="video-placeholder">📹 DAX & Power Query (24:40)</div>
                <p>Microsoft's enterprise solution - standard for 60% of corporate analytics teams.</p>
            </div>
        `,
        quiz: [
            { q: "DAX creates:", a: ["Tables", "Measures", "Joins", "Filters"], correct: 1 },
            { q: "Power Query handles:", a: ["Visualization", "Data cleaning", "Reports", "Dashboards"], correct: 1 }
        ]
    },
    {
        id: 9,
        title: "Real Projects",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>💼 Module 9: Industry Projects</h2>
                <div class="video-placeholder">📹 E-commerce Sales Analysis (35:20)</div>
                <p>Complete 4 portfolio projects: E-commerce, Finance, Healthcare, Tech SaaS metrics.</p>
                <ul>
                    <li>📈 E-commerce: Customer segmentation & CLV</li>
                    <li>💰 Finance: Risk analysis & fraud detection</li>
                    <li>🏥 Healthcare: COVID trends & patient outcomes</li>
                    <li>🚀 Tech: User retention & A/B testing</li>
                </ul>
            </div>
        `,
        quiz: [
            { q: "Portfolio projects demonstrate:", a: ["Theory", "Real skills", "Certifications", "Interviews"], correct: 1 },
            { q: "CLV means:", a: ["Cost Lifetime Value", "Customer Lifetime Value", "Current Level Value", "Customer Lead Value"], correct: 1 }
        ]
    },
    {
        id: 10,
        title: "Capstone Project",
        completed: false,
        content: `
            <div class="lesson-section">
                <h2>🎓 Module 10: Capstone Challenge</h2>
                <div class="video-placeholder">📹 End-to-End Analysis (45:00)</div>
                <p>Build complete analytics pipeline from raw data → executive dashboard. Your final portfolio piece.</p>
                <div class="dataset-preview">
                    <h4>Download Datasets:</h4>
                    <a href="datasets/ecommerce-sales.csv" download class="exercise-btn">📥 E-commerce (50K rows)</a>
                    <a href="datasets/finance-transactions.csv" download class="exercise-btn">💰 Finance (25K rows)</a>
                    <a href="datasets/covid-healthcare.csv" download class="exercise-btn">🏥 COVID Data (100K rows)</a>
                </div>
                <button class="exercise-btn" style="background: #ff6b35; color: white;" onclick="generateCertificate()">
                    🏆 Generate Certificate (80% Complete)
                </button>
            </div>
        `,
        quiz: [
            { q: "Capstone includes:", a: ["All skills", "Just SQL", "Only Python", "Excel"], correct: 0 },
            { q: "Portfolio goal:", a: ["Learn", "Get hired", "Practice", "Certify"], correct: 1 }
        ]
    }
];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initApp();
    loadProgress();
    renderModules();
    initSalesChart();
    
    // Event Listeners
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.querySelector('.close').addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) closeModal();
    });
});

function initApp() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.className = savedTheme + '-theme';
    document.getElementById('theme-toggle').textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    const newTheme = isDark ? 'light' : 'dark';
    document.body.className = newTheme + '-theme';
    localStorage.setItem('theme', newTheme);
    document.getElementById('theme-toggle').textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

function renderModules() {
    const moduleList = document.getElementById('module-list');
    moduleList.innerHTML = '';
    
    COURSE_MODULES.forEach(module => {
        const li = document.createElement('li');
        li.className = `module-item ${module.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <span>${module.completed ? '✅' : module.id}</span>
            <div>
                <div>${module.title}</div>
                <small>${module.completed ? 'Completed' : 'In Progress'}</small>
            </div>
        `;
        li.onclick = () => loadModule(module.id);
        moduleList.appendChild(li);
    });
    updateProgress();
}

function loadModule(id) {
    const module = COURSE_MODULES.find(m => m.id === id);
    if (!module) return;
    
    document.getElementById('module-content').innerHTML = module.content;
    document.getElementById('enroll-banner').style.display = 'none';
    
    // Mark as active
    document.querySelectorAll('.module-item').forEach(item => item.classList.remove('active'));
    document.querySelector(`[onclick="loadModule(${id})"]`).classList.add('active');
    
    // Show quiz button
    const quizBtn = document.createElement('button');
    quizBtn.className = 'exercise-btn';
    quizBtn.textContent = '📝 Take Module Quiz';
    quizBtn.onclick = () => showQuiz(id);
    document.querySelector('.lesson-section').appendChild(quizBtn);
}

function showQuiz(moduleId) {
    const module = COURSE_MODULES.find(m => m.id === moduleId);
    const modal = document.getElementById('quiz-modal');
    const questionsDiv = document.getElementById('quiz-questions');
    
    document.getElementById('quiz-title').textContent = `Quiz: ${module.title}`;
    
    questionsDiv.innerHTML = module.quiz.map((q, i) => `
        <div class="quiz-question" style="margin-bottom: 1.5rem;">
            <p><strong>Q${i+1}:</strong> ${q.q}</p>
            ${q.a.map((answer, j) => `
                <label style="display: block; margin: 0.5rem 0; cursor: pointer;">
                    <input type="radio" name="q${i}" value="${j}" style="margin-right: 0.5rem;">
                    ${answer}
                </label>
            `).join('')}
        </div>
    `).join('');
    
    document.getElementById('quiz-submit').onclick = () => submitQuiz(moduleId);
    modal.style.display = 'block';
}

function submitQuiz(moduleId) {
    const module = COURSE_MODULES.find(m => m.id === moduleId);
    let score = 0;
    
    module.quiz.forEach((q, i) => {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) score++;
    });
    
    const percentage = (score / module.quiz.length) * 100;
    if (percentage >= 80) {
        module.completed = true;
        saveProgress();
        renderModules();
        alert(`🎉 Excellent! ${score}/${module.quiz.length} (${percentage}%) - Module Completed!`);
    } else {
        alert(`📚 Keep studying! ${score}/${module.quiz.length} (${percentage}%) - Try again!`);
    }
    
    closeModal();
}

function updateProgress() {
    const completed = COURSE_MODULES.filter(m => m.completed).length;
    const percentage = Math.round((completed / COURSE_MODULES.length) * 100);
    
    document.getElementById('progress-total').textContent = `${percentage}%`;
    document.querySelector('.progress-fill').style.width = `${percentage}%`;
    
    if (percentage >= 80) {
        document.querySelector('.lesson-section').innerHTML += `
            <div style="text-align: center; padding: 2rem; background: linear-gradient(135deg, gold, orange); border-radius: 15px; margin-top: 2rem;">
                <h2>🎉 Course Complete! Ready for Certificate</h2>
                <button class="exercise-btn" style="background: #0f0f23; color: white; font-size: 1.2rem; padding: 1rem 2rem;" onclick="generateCertificate()">
                    Generate Data Analyst Certificate
                </button>
            </div>
        `;
    }
}

function saveProgress() {
    localStorage.setItem('dataAnalystProgress', JSON.stringify(COURSE_MODULES));
}

function loadProgress() {
    const saved = localStorage.getItem('dataAnalystProgress');
    if (saved) {
        const progress = JSON.parse(saved);
        progress.forEach((savedModule, i) => {
            if (COURSE_MODULES[i]) COURSE_MODULES[i].completed = savedModule.completed;
        });
    }
}

function initSalesChart() {
    const ctx = document.getElementById('sales-chart')?.getContext('2d');
    if (!ctx) return;
    
    new Chart(ctx, {
        type: 'bar',
         {
            labels: ['Electronics', 'Fashion', 'Home', 'Sports', 'Beauty'],
            datasets: [{
                label: 'Jan-Mar 2025',
                 [58000, 42000, 35000, 24000, 29000],
                backgroundColor: 'rgba(0, 212, 170, 0.8)',
                borderColor: '#00d4aa',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true, ticks: { callback: v => '$' + v/1000 + 'K' } }
            }
        }
    });
}

function generateCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    const ctx = canvas.getContext('2d');
    
    // Gold certificate background
    const gradient = ctx.createLinearGradient(0, 0, 800, 600);
    gradient.addColorStop(0, '#FFD700');
    gradient.addColorStop(1, '#FFA500');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 800, 600);
    
    // Certificate content
    ctx.fillStyle = '#0f0f23';
    ctx.font = 'bold 48px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Data Analyst Mastery', 400, 180);
    
    ctx.font = 'bold 28px serif';
    ctx.fillText('Certificate of Completion', 400, 240);
    
    ctx.font = '24px serif';
    ctx.fillText('Awarded to', 400, 320);
    ctx.font = 'bold 32px serif';
    ctx.fillText('Future Data Analyst', 400, 370);
    
    ctx.font = '20px serif';
    ctx.fillText(`Completed: ${new Date().toLocaleDateString()}`, 400, 450);
    ctx.fillText('10 Modules | Real Projects | Industry Ready', 400, 480);
    
    document.getElementById('certificate-modal').style.display = 'block';
}

function downloadCertificate() {
    const canvas = document.getElementById('certificate-canvas');
    const link = document.createElement('a');
    link.download = `data-analyst-certificate-${Date.now()}.png`;
    link.href = canvas.toDataURL();
    link.click();
}

function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');
}

function showPayment() {
    document.getElementById('payment-modal').style.display = 'block';
}

function enrollCourse() {
    document.getElementById('enroll-banner').innerHTML = `
        <h1>✅ Welcome to Data Analyst Mastery!</h1>
        <p>Course fully unlocked. Start Module 1 👇</p>
    `;
    document.querySelector('.sidebar').style.display = 'block';
    closeModal();
    loadModule(1);
}

// Interactive Simulators (placeholders)
function launchExcelSimulator() {
    alert('🚀 Excel Simulator: Practice VLOOKUP on sample sales data!\n\n=VLOOKUP("Electronics", A:D, 3, FALSE) → $58,000');
}

function launchSQLBuilder() {
    const query = prompt('Write SQL to find top category:\n\nHint: SELECT category, SUM(revenue)...', 
        'SELECT category, SUM(revenue) FROM ecommerce GROUP BY 1 ORDER BY 2 DESC LIMIT 1');
    if (query) alert('✅ Query executed! Electronics: $58K (top category)');
}

function launchPythonEditor() {
    alert('🐍 Python Playground Active!\n\ndf.groupby("category")["revenue"].sum()\nOutput: Electronics $58K (highest)');
}

// Mobile menu toggle (add hamburger later)
