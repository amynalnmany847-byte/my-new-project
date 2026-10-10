document.addEventListener('DOMContentLoaded', () => {
    // قاعدة بيانات مبسطة لتوليد النطاق التقني للمشاريع
    const projectData = {
        bus: "نظام تتبع الحصص والحافلات الذكي: يهدف لتتبع مسارات الحافلات وإرسال إشعارات فورية باستخدام تقنيات الـ GPS وتوفير واجهات تفاعلية للطلاب والأهالي.",
        tourism: "نظام إدارة السياحة والفرق السياحية: يختص بتنظيم رحلات الفرق السياحية، حجز المرشدين، وإدارة التقارير والبيانات الخاصة بالوجهات السياحية في اليمن.",
        school: "نظام الإدارة المدرسية: منصة متكاملة لإدارة شؤون الطلاب، الدرجات، الحضور والغياب، وتوفير صلاحيات مخصصة للمدير والمعلم والطالب."
    };

    const generateBtn = document.getElementById('generateBtn');
    const projectTypeSelect = document.getElementById('projectType');
    const projectOutput = document.getElementById('projectOutput');
    const outputDescription = document.getElementById('outputDescription');

    generateBtn.addEventListener('click', () => {
        const selectedValue = projectTypeSelect.value;
        if (projectData[selectedValue]) {
            outputDescription.textContent = projectData[selectedValue];
            projectOutput.classList.remove('hidden');
        }
    });

    // إدارة المهام التفاعلية
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="this.parentElement.remove()">حذف</button>
        `;

        taskList.appendChild(li);
        taskInput.value = "";
    });
});
