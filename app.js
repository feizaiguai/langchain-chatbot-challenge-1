/**
 * LangChain 对话机器人 - 客户端实现
 * 模拟 LangChain 的核心概念：
 * - LLM (大型语言模型)
 * - ConversationChain (对话链)
 * - Memory (记忆系统)
 */

// ============================================
// LLM 模拟类 - 模拟大型语言模型
// ============================================
class MockLLM {
    constructor() {
        this.name = "Mock-LLM-GPT";
        this.temperature = 0.7;
        this.maxTokens = 500;
    }

    // 模拟 LLM 调用
    async call(prompt, context = []) {
        // 模拟网络延迟
        await this.simulateDelay(800 + Math.random() * 1200);
        
        // 基于上下文和提示生成响应
        return this.generateResponse(prompt, context);
    }

    simulateDelay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 响应生成逻辑
    generateResponse(prompt, context) {
        const lowerPrompt = prompt.toLowerCase();
        
        // 意图识别和响应生成
        if (this.containsKeywords(lowerPrompt, ['你好', '嗨', 'hello', 'hi', '早上好', '晚上好'])) {
            return this.generateGreeting(context);
        }
        
        if (this.containsKeywords(lowerPrompt, ['什么是langchain', 'langchain是什么', '介绍langchain'])) {
            return this.generateLangChainIntro();
        }
        
        if (this.containsKeywords(lowerPrompt, ['组件', '组成部分', '组成'])) {
            return this.generateComponents();
        }
        
        if (this.containsKeywords(lowerPrompt, ['怎么使用', '如何使用', '